/// Extract - Extracts matching types from a union.////

type role = 'admin' | 'user' | 'guest';
type activeRole = Extract<role, 'admin'| 'user'>; // 'admin' | 'user'