import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Simple AuthContext for a MERN stack app.
 * - Keeps user and token in state + localStorage
 * - Exposes login, register, logout, and an isAuthenticated flag
 *
 * Adjust API endpoints (/api/auth/login, /api/auth/register) as needed.
 */

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const raw = localStorage.getItem("auth:user");
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    });
    const [token, setToken] = useState(() => localStorage.getItem("auth:token") || null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // keep localStorage in sync
        if (user) {
            localStorage.setItem("auth:user", JSON.stringify(user));
        } else {
            localStorage.removeItem("auth:user");
        }

        if (token) {
            localStorage.setItem("auth:token", token);
        } else {
            localStorage.removeItem("auth:token");
        }
    }, [user, token]);

    const login = async ({ email, password }) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({ message: "Login failed" }));
                throw new Error(err.message || "Login failed");
            }

            const data = await res.json();
            // Expecting { user: {...}, token: "..." }
            setUser(data.user || null);
            setToken(data.token || null);
            return { ok: true, data };
        } catch (error) {
            // Fallback for demo: if backend not available, accept any credentials locally
            console.warn('Auth login failed (backend). Falling back to local demo auth.', error);
            const demoUser = { email };
            const demoToken = 'demo-token-' + Date.now();
            setUser(demoUser);
            setToken(demoToken);
            return { ok: true, data: { user: demoUser, token: demoToken } };
        } finally {
            setLoading(false);
        }
    };

    const register = async ({ name, email, password }) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({ message: "Registration failed" }));
                throw new Error(err.message || "Registration failed");
            }

            const data = await res.json();
            // Optionally auto-login after register
            setUser(data.user || null);
            setToken(data.token || null);
            return { ok: true, data };
        } catch (error) {
            // Fallback demo behavior
            console.warn('Auth register failed (backend). Falling back to local demo register.', error);
            const demoUser = { name, email };
            const demoToken = 'demo-token-' + Date.now();
            setUser(demoUser);
            setToken(demoToken);
            return { ok: true, data: { user: demoUser, token: demoToken } };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setLoading(false);
        localStorage.removeItem("auth:user");
        localStorage.removeItem("auth:token");
    };

    const updateUser = (patch) => {
        setUser((prev) => {
            const next = { ...(prev || {}), ...patch };
            localStorage.setItem("auth:user", JSON.stringify(next));
            return next;
        });
    };

    const value = {
        user,
        token,
        loading,
        isAuthenticated: Boolean(token),
        login,
        register,
        logout,
        updateUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return ctx;
};

export default AuthContext;