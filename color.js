const colors = document.querySelectorAll('.momentum .controls input');
console.log(colors);

function handleUpdate() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

colors.forEach(color => color.addEventListener('change', handleUpdate));
