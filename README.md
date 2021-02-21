# LifeChain

## Mission Statement
One of the biggest challenges in the Healthcare Industry today is the ability to maintain consistent patient data that can be easily and securely transferred between clinics, hospitals, labs, and specialists. It is also difficult for patients to access a complete history of their own medical data. People with frequent health complications or chronic illness have to keep track of multiple forms of data such as diagnoses, medications, and tests. LifeChain’s goal is to create a platform that can provide ease of data access for patients, and ease of data transfer between healthcare providers to keep information consistent and accurate.<br /><br />
LifeChain focuses on:<br />
- **Security**: using Blockchain algorithms to create a chain of trust and transfer data between institutions securely<br />
- **Consistency**: maintain data integrity due to immutable Blockchain technology <br />
- **Transparency**: allow transparency between healthcare providers and patients about diagnostics and medications<br />
- **Usability**: sleek and user friendly interface to allow for a positive user experience for all stakeholders<br />

## How It Works
- Each patient has a unique file within the **ARK** Blockchain ledger which contains all information
- Patient information includes: diagnosis history, medication history, healthcare professional contacts, requisition history, medical procedure history, and immunization history
- Each certified healthcare institution has a unique **DataStax** database deployed on **Google Cloud Platform** to offload data and access patient information
- Both patients and healthcare workers can access patient information with the combination of healthcard numbers and unique secret keys to access data

## Technologies Used
- **Ark.io**: for creating a node for Blockchain technology
- **DigitalOcean**: for creating a virtual machine to run the Ark.io node
- **DataStax Astra**: for creating databases for individual institutions
- **Google Cloud Platform**: cloud for deploying DataStax Astra
- **Figma**: for prototyping design before development

## Programming Languages & Frameworks
- JavaScript
- React.js
- Node.js
- HTML
- CSS
- Bash Scripting

## Collaborators
- Charlene Landayan
- Vanessa Landayan
