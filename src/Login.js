import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(e) {
        e.preventDefault();
        const checkLogin = true;

        if(checkLogin) {
            navigate('/dashboard')
        }

    }

    return (
        <form onSubmit={loginHandler}>
            <input placeholder="username" name="username"/><br></br>
            <input placeholder="password" name="password"/>
            <button type="submit">Login</button>
        </form>
    )
}