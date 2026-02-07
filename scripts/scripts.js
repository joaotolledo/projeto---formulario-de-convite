const file = document.getElementById('file')
const fileName = document.getElementById('file-name')

file.addEventListener('change', function (){
    if(this.files && this.files.length > 0) {
        fileName.textContent = this.files[0].name
    } else {
        fileName.textContent = "Nenhum arquivo selecionado"
    }
})