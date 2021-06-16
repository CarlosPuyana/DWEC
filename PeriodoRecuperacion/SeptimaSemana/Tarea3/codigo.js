const storageType = localStorage
const consentPropertyName = 'jdc_consent'

const shouldShowPopup = () => !storageType.getItem(consentPropertyName)
const saveToStorage = () => storageType.setItem(consentPropertyName, true)

window.onload = () => {
    if (shouldShowPopup() ) {
        const consent = confirm('Acepta los terminos y condiciones del sitio')

        if (consent) {
            saveToStorage()
        }

    }
}