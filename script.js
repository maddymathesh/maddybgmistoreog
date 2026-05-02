function toggleMenu() {
            document.getElementById('mobileMenu').classList.toggle('open');
        }

        document.addEventListener('click', function (e) {
            const menu = document.getElementById('mobileMenu');
            const ham = document.getElementById('ham');
            if (!menu.contains(e.target) && !ham.contains(e.target)) {
                menu.classList.remove('open');
            }
        });