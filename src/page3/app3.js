document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('lineCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let startBox = null;

    // Set canvas size to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Coordinates of div elements
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');

    // Function to draw a line between two div elements
    function drawLine(start, end) {
        const rect1 = start.getBoundingClientRect();
        const rect2 = end.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2 + window.scrollX;
        const y1 = rect1.top + rect1.height / 2 + window.scrollY;

        const x2 = rect2.left + rect2.width / 2 + window.scrollX;
        const y2 = rect2.top + rect2.height / 2 + window.scrollY;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // Draw initial lines
    function drawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLine(box1, box2);
        drawLine(box2, box3);
    }

    // Draw lines on mouseup event
    function handleMouseUp(event) {
        const target = event.target;
        if (isDrawing && target.id.startsWith('box')) {
            const endBox = document.getElementById(target.id);
            drawLine(startBox, endBox);
            isDrawing = false;
            startBox = null;
        }
    }

    // Start drawing on mousedown event
    function handleMouseDown(event) {
        const target = event.target;
        if (target.id.startsWith('box')) {
            startBox = document.getElementById(target.id);
            isDrawing = true;
        }
    }

    // Event listeners for mouse events
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousedown', handleMouseDown);

    // Draw initial lines
    drawLines();

    // Draw lines when the window is resized
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawLines();
    });
});
