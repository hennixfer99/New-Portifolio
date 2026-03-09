import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.63);
    background-color: var(--header-color);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 8vh;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 8vh;
        z-index: 1000;
    }
    .logo {
        width: 45px;
        height: 40px;
        border: 1px solid var(--border-strong);
        border-radius: 12px;
        cursor: pointer;
    }

    .my-networks {
        display: inline-block;
    }

    nav a {
        text-decoration: none;
        color: var(--black);
        padding-bottom: 4px;
        transition: border-bottom 0.2s;
    }

    nav a.active {
        border-bottom: 1px solid var(--border-strong);
        font-weight: bold;
    }
    nav a img {
        max-width: 60px;
        max-height: 32px;
        cursor: pointer;
    }
    .buttons-homepage {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
        height: 100%;
        align-items: center;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    li {
        max-height: 100%;
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .theme-toggle {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        padding: 0;
        background-color: var(--surface);
        border: 1px solid var(--border-soft);
        color: var(--black);
        border-radius: 999px;
        cursor: pointer;
        transition:
            background-color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
    }

    .theme-toggle:hover {
        border-color: var(--hover-border);
        box-shadow: 0 0 0 3px rgba(189, 180, 220, 0.25);
    }

    .theme-toggle:active {
        transform: scale(0.97);
    }

    .theme-icon {
        display: grid;
        place-items: center;
        width: 20px;
        height: 20px;
        user-select: none;
        pointer-events: none;
        transition: color 0.25s ease;
    }

    .theme-icon.sun {
        color: #f59f00;
    }

    .theme-icon.moon {
        color: #bdb4dc;
    }

    .theme-icon svg {
        width: 20px;
        height: 20px;
        display: block;
    }

    [data-theme="dark"] & .theme-toggle {
        background-color: #27313a;
        border-color: #56606a;
    }

    [data-theme="dark"] & .theme-toggle:hover {
        border-color: #798592;
        box-shadow: 0 0 0 3px rgba(127, 138, 149, 0.32);
    }

    .mobile-toggle {
        width: 38px;
        height: 34px;
    }

    .mobile-toggle .theme-icon,
    .mobile-toggle .theme-icon svg {
        width: 18px;
        height: 18px;
    }

    .breakpoint {
        text-align: center;
        align-items: center;
        padding: 4.5vh 25px 4.5vh 0;
        border-right: 1.5px solid #adb5bd;
    }
    @media (max-width: 700px) {
        nav {
            max-width: 80%;
            margin: 0 auto;
        }
        .menu {
            cursor: pointer;
            max-width: 30px;
        }
    }
`;
export default Container;
