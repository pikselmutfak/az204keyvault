const {ClientSecretCredential} = require('@azure/identity')
const {SecretClient} = require('@azure/keyvault-secrets')

const credential = new ClientSecretCredential(
    '90386a23-5656-47c3-bd6f-ca12bf2b8ed4', 
    'f3ce8171-0db4-447a-89e1-613b5773a535', 
    'p1j-PDg3c5~S1EDTivXl0.K.grXW20~65.'
    )

const client = new SecretClient('https://pixmyvault.vault.azure.net/', credential)

client.getSecret('mysecret')
.then((response) => {
    console.log('secret value: ', response.value)
})
.catch((err) => {
    console.log('error', err)
})