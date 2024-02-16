document.addEventListener('DOMContentLoaded', init)
function init() {
    const questionnaireFileButton = document.getElementById('questionnaire-file-btn')
    const questionnaireFileInput = document.getElementById('questionnaire-file')
    const fileQuestionnaireInfo = document.getElementById('file-questionnaire-info')
    const fileQuestionnaireButtonDelete = document.getElementById('file-questionnaire-delete')
    const fileQuestionnaireTitle = document.getElementById('file-questionnaire-title')

    questionnaireFileButton.addEventListener('click', () => questionnaireFileInput.click())
    questionnaireFileInput.addEventListener('change', ev => {
        if(!ev.target.files.length) return
        setStateFile(true, ev.target.files[0].name)
    })

    function setStateFile(state, title = '') {
        if(!state) {
            fileQuestionnaireInfo.setAttribute('data-hidden', '')
            questionnaireFileButton.removeAttribute('data-hidden')
            fileQuestionnaireTitle.textContent = ''
            return
        }
        fileQuestionnaireButtonDelete.addEventListener('click', () => {
            questionnaireFileInput.files = new DataTransfer().files
            setStateFile(false)
        })
        questionnaireFileButton.setAttribute('data-hidden', '')
        fileQuestionnaireInfo.removeAttribute('data-hidden')
        fileQuestionnaireTitle.textContent = title
        return
    }
}
