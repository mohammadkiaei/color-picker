// get the color input by id
const colorPicker = document.getElementById('color-picker');

// Set default background color
colorPicker.value = '#11324D'; 

colorPicker.AddEventListener('input', () => {
    const colorSelected = colorPicker.value;
    document.body.style.background = colorSelected;
})

// Developed By SeyedMohammadMahdi Kiaei
