const deleteForms = document.querySelectorAll('.delete-form');

deleteForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const confirmDelete = confirm('Tem certeza que deseja excluir esta tarefa?');
        if (!confirmDelete) {
            e.preventDefault(); 
        }
    });
});
