import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return (
        <>
            <h1>Halaman About</h1>
            <p>Halo halaman ini adalah halaman about, jika ingin mengetahui informasi lebih lanjut, silahkan klik link dibawah ini</p>
            <Link to="/about/team">About Team</Link>
            <Outlet />
        </>
    )
}