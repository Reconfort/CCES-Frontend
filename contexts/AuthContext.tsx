'use client';
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import api from "@/hooks/api";

// User returned
interface User { _id: string; name: string; email: string; role: string; }

// Methods Shape and state
interface AuthContextType {
    user: User | null;
    signin: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    verifyCode: (email: string, code: string) => Promise<void>;
    resetPassword: (password: string, confirmPassword: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const stored = localStorage.getItem('user');
        if (token && stored && stored !== 'undefined') {
            try {
                setUser(JSON.parse(stored));
            } catch (err) {
                console.warn('Failed to parse stored user:', err);
                localStorage.removeItem('user');
            }
        }
    }, []);

    /**
     * Sign in a user and persist tokens
     */
    const signin = async (email: string, password: string) => {
        try {
            // Call backend signin endpoint
            const { data } = await api.post('/auth/signin', { email, password });
            // Store JWT in localStorage for client use
            localStorage.setItem('token', data.token);
            // Also store JWT in a cookie so Next.js middleware can read it
            document.cookie = `token=${data.token}; path=/;`;
            // Store user info
            localStorage.setItem('user', JSON.stringify(data.user));
            // Store a user role in a cookie for middleware role check
            document.cookie = `role=${data.user.role}; path=/;`;
            setUser(data.user);
            toast.success(data.message); // show success toast
            router.push('/dashboard'); // navigate to the protected dashboard
        } catch (e: any) {
            // Display error from server or generic message
            toast.error(e.response?.data?.message || 'Sign in failed');
        }
    };

    /**
     * Register a new user
     */
    const signup = async (name: string, email: string, password: string) => {
        try {
            const { data } = await api.post('/auth/signup', { name, email, password });
            toast.success(data.message);
            router.push('/auth/signin');
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Sign up failed');
        }
    };

    /**
     * Trigger forgot-password email
     */
    const forgotPassword = async (email: string) => {
        try {
            const { data } = await api.post('/auth/forgot-password', { email });
            toast.success(data.message);
            router.push('/auth/verify-email');
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Request failed');
        }
    };

    /**
     * Verify reset code sent by email
     */
    const verifyCode = async (email: string, code: string) => {
        try {
            const { data } = await api.post('/auth/verify-code', { email, code });
            // Save a new token for reset-password
            localStorage.setItem('token', data.token);
            document.cookie = `token=${data.token}; path=/;`;
            toast.success(data.message);
            router.push('/auth/reset-password');
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Invalid code');
        }
    };

    const resetPassword = async (password: string, confirmPassword: string) => {
        try {
            const resetToken = localStorage.getItem('token');

            if (!resetToken) {
                toast.error('Missing reset token. Please verify your email again.');
                router.push('/auth/forgot-password');
                return;
            }

            const { data } = await api.post(
                '/auth/reset-password',
                { password, confirmPassword },
                {
                    headers: {
        Authorization: `Bearer ${resetToken}`,
                    },
                });

            // Clear the reset token after success
            localStorage.removeItem('resetToken');
            document.cookie = 'resetToken=; Max-Age=0; path=/;';

            toast.success(data.message);
            router.push('/auth/signin');
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Reset failed');
        }
    };

    /**
     * Log the user out
     */
    const logout = () => {
        // Clear tokens from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Clear cookies by setting expiry
        document.cookie = 'token=; Max-Age=0; path=/;';
        document.cookie = 'role=; Max-Age=0; path=/;';
        setUser(null);
        router.push('/auth/signin');
    };

    return (
        <AuthContext.Provider value={{ user, signin, signup, forgotPassword, verifyCode, resetPassword, logout }}>
            {children}
        </AuthContext.Provider>
    );
};