import styled from "styled-components";

const Container = styled.div`
    @keyframes sunEnter {
        0% {
            transform: rotate(-35deg) scale(0.75);
            opacity: 0.45;
        }
        70% {
            transform: rotate(8deg) scale(1.08);
            opacity: 1;
        }
        100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
        }
    }

    @keyframes moonEnter {
        0% {
            transform: rotate(35deg) scale(0.75);
            opacity: 0.45;
        }
        70% {
            transform: rotate(-8deg) scale(1.08);
            opacity: 1;
        }
        100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
        }
    }

    @keyframes thumbPop {
        0% {
            transform: translateX(var(--thumb-x)) scale(1);
        }
        50% {
            transform: translateX(var(--thumb-x)) scale(0.92);
        }
        100% {
            transform: translateX(var(--thumb-x)) scale(1);
        }
    }

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
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 80px;
        height: 38px;
        padding: 0 9px;
        background-color: var(--surface);
        border: 1px solid var(--border-soft);
        color: var(--black);
        border-radius: 999px;
        cursor: pointer;
        overflow: hidden;
        transition:
            background-color 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.25s ease;
    }

    .theme-toggle:hover {
        border-color: var(--hover-border);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.12);
    }

    .theme-toggle:active {
        transform: scale(0.97);
    }

    .theme-toggle:active .theme-thumb {
        animation: thumbPop 0.22s ease;
    }

    .theme-icon {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #ffffff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22);
        line-height: 1;
        text-align: center;
        user-select: none;
        pointer-events: none;
        overflow: hidden;
        transition:
            opacity 0.25s ease,
            color 0.25s ease;
    }

    .theme-icon .icon-glyph {
        display: grid;
        place-items: center;
        width: 12px;
        height: 12px;
        transform: translateY(0);
        transition: transform 0.35s ease;
    }

    .theme-icon .icon-glyph svg {
        display: block;
        width: 12px;
        height: 12px;
    }

    .theme-icon.sun {
        color: #f59f00;
    }

    .theme-icon.moon {
        color: #bdb4dc;
    }

    .theme-thumb {
        --thumb-x: 0px;
        position: absolute;
        top: 6px;
        left: 3px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: linear-gradient(145deg, #ffffff, #d7dbe0);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transform: translateX(var(--thumb-x));
        transition:
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.45s ease,
            box-shadow 0.45s ease;
    }

    [data-theme="dark"] & .theme-toggle {
        background-color: #2f8f3a;
        border-color: #43a047;
        box-shadow:
            0 0 0 2px rgba(67, 160, 71, 0.24),
            inset 0 0 12px rgba(255, 255, 255, 0.08);
    }

    [data-theme="dark"] & .theme-thumb {
        --thumb-x: 46px;
        background: linear-gradient(145deg, #ced4da, #adb5bd);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
    }

    [data-theme="dark"] & .theme-icon.sun {
        opacity: 0.45;
    }

    [data-theme="dark"] & .theme-icon.sun .icon-glyph {
        transform: rotate(-16deg) scale(0.82);
    }

    [data-theme="dark"] & .theme-icon.moon {
        opacity: 1;
    }

    [data-theme="dark"] & .theme-icon.moon .icon-glyph {
        transform: rotate(0deg) scale(0.94);
        animation: moonEnter 0.45s ease;
    }

    [data-theme="light"] & .theme-icon.sun {
        opacity: 1;
    }

    [data-theme="light"] & .theme-icon.sun .icon-glyph {
        transform: rotate(0deg) scale(0.94);
        animation: sunEnter 0.45s ease;
    }

    [data-theme="light"] & .theme-icon.moon {
        opacity: 0.5;
    }

    [data-theme="light"] & .theme-icon.moon .icon-glyph {
        transform: rotate(16deg) scale(0.82);
    }

    .mobile-toggle {
        width: 68px;
        height: 34px;
        padding: 0 8px;
    }

    .mobile-toggle .theme-thumb {
        width: 22px;
        height: 22px;
        top: 6px;
        left: 3px;
    }

    [data-theme="dark"] & .mobile-toggle .theme-thumb {
        --thumb-x: 40px;
    }

    [data-theme="dark"] & .theme-toggle:hover {
        border-color: #66bb6a;
        box-shadow:
            0 0 0 2px rgba(102, 187, 106, 0.3),
            inset 0 0 14px rgba(255, 255, 255, 0.1);
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
