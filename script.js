$(document).ready(function() {
    fetch('video_list.json')
        .then(response => response.json())
        .then(data => {
            let rows = '';
            data.forEach(item => {
                rows += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.format}</td>
                        <td>${item.size}</td>
                    </tr>
                `;
            });
            $('#moviesTable tbody').html(rows);
            $('#moviesTable').DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/fa.json"
                }
            });
        });
});
