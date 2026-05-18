//// Exclude - Remove specific types from a union type.////

type status = 'success' | 'error' | 'loading';
type result = Exclude<status, 'loading'>;  // 'success'| 'error'

