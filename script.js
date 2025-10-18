document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.label');
    const cells = document.querySelectorAll('.seating-chart td');
    const printButton = document.getElementById('print-button');

    let draggedLabel = null;

    labels.forEach(label => {
        label.addEventListener('dragstart', (e) => {
            draggedLabel = e.target;
            setTimeout(() => {
                e.target.style.display = 'none';
            }, 0);
        });

        label.addEventListener('dragend', (e) => {
            setTimeout(() => {
                draggedLabel.style.display = 'block';
                draggedLabel = null;
            }, 0);
        });
    });

    cells.forEach(cell => {
        cell.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        cell.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });

        cell.addEventListener('dragleave', (e) => {
            e.target.style.backgroundColor = '';
        });

        cell.addEventListener('drop', (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = '';
            if (e.target.tagName === 'TD') {
                e.target.appendChild(draggedLabel);
            }
        });
    });

    printButton.addEventListener('click', () => {
        window.print();
    });
});