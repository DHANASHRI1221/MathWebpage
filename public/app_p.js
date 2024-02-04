function previewImage() {
    var preview = document.getElementById('preview-image');
    var fileInput = document.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = ''; // Clear previous content
            var img = document.createElement('img');
            img.src = e.target.result;
            img.height = 200;
            img.width = 200;
            preview.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

function createProfile() {
    // Add any additional functionality for creating a profile if needed
    let heading = document.getElementById("heading");
    heading.remove();

    let photoInput = document.getElementById('imp');
    photoInput.remove();

    let inputs = Array.from(document.getElementsByClassName('input-group mb-3'));
    inputs.forEach(element =>{
        let input = element.querySelector('input[type="text"]');
        let result = input.value;
        input.remove();
        let newDiv = document.createElement('p');
        newDiv.textContent = result;
        element.appendChild(newDiv);
        element.classList = 'taken mb-3';
        let title = element.getElementsByClassName('input-group-text')[0];
        title.innerHTML = title.innerHTML + " :";
        title.classList = '';
    })

    document.getElementsByClassName('profile-info')[0].style.alignItems = 'flex-start';
    document.getElementsByClassName('profile-info')[0].style.width = '64%';

    let btn = document.getElementsByClassName('btn1')[0];
    btn.remove();
}
