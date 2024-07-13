document.addEventListener("DOMContentLoaded", function () {
    const sdButton = document.getElementById('sdButton');
    const dxButton = document.getElementById('dxButton');
    const tableBody = document.getElementById('tableBody');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times</span>
            <h2 id="modal-song-name"></h2>
            <img id="modal-cover-image" src="../images/image-04.png" alt="封面图片" style="width:100%; height:auto;">
        </div>
    `;
    document.body.appendChild(modal);

    const closeModalButton = modal.querySelector('.close');
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    let data;

    // Fetch data from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            showTable('SD'); // Default to showing SD category
        });

    sdButton.addEventListener('click', () => {
        sdButton.classList.add('active');
        dxButton.classList.remove('active');
        showTable('SD');
    });

    dxButton.addEventListener('click', () => {
        dxButton.classList.add('active');
        sdButton.classList.remove('active');
        showTable('DX');
    });

    function showTable(category) {
        const filteredData = data.filter(item => item.category === category);

        filteredData.sort((a, b) => b['DX-Rating'] - a['DX-Rating']);

        tableBody.innerHTML = '';

        filteredData.forEach((item, index) => {
            const row = document.createElement('tr');

            const name = category === 'DX' 
                          ? `<span style="color: #00f;">DX </span>${item.name}` 
                          : item.name;
                          
            const difficulties = { 
                'Expert': 'Expert', 
                'Master': 'Master', 
                'Advanced': 'Advanced',
                'Re:MASTER': 'ReMaster'
            };

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${name}</td>
                <td><button class="difficulty-button ${difficulties[item.difficulty]}">${item.difficulty}</button></td>
                <td>${item['level']}</td>
                <td>${item['DX-Rating']}</td>
                <td>${item['concrete-level']}</td>
                <td>
                    <button data-popover="查看封面"><img src="../images/image-01.png" alt="查看封面"></button>
                    <button data-popover="编辑分数"><img src="../images/image-02.png" alt="编辑分数"></button>
                    <button data-popover="填入计算器"><img src="../images/image-03.png" alt="填入计算器"></button>
                </td>
            `;

            tableBody.appendChild(row);

            const viewCoverButton = row.querySelector('button[data-popover="查看封面"]');
            viewCoverButton.addEventListener('click', () => {
                document.getElementById('modal-song-name').textContent = item.name;
                modal.style.display = 'flex';
            });
        });
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});