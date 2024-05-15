## Project Summary

I got involved in this project at DDI Teknoloji. Our customer was one of the leading banks in Turkey and they wanted to automate their payment orders of customers. The customers send the physical documents to the bank's branch (which located in any city in Turkey). These documents were scanned by the bank personnel to the bank's internal system. Once this system receives the digital copy of the document, it starts a new process (as we call "a batch"). Please see the diagram below for the architecture of the system. The bank processes a volume of approximately 5000 cases per day. Other banking services such as onboarding, loans and mortgages can also be applied in a similar fashion.

I was responsible for designing the "data validation" user interface (top image), setting up the "data extraction" and "classification" of the document, training the bank personnel for Kofax products (how to install Kofax products, in-depth overview of Kofax products and how they work) and preparing the documentation for the end-users/bank IT personnel.

#### The workflow and the architecture of the system

![diagram](../projectsContent/Customer%20Payment%20Orders%20Automation/images/CustomerOrdersDiagram.png)

1. **Custom Web Service:** Web Service that enables to import batch information to be created in Kofax.

2. **Kofax Batch Creator:** This custom library creates the batch in Kofax Database, based on the web service information supplied.

3. **GetCustomerInformation:** It is a C# library designed as an intermediate access layer that provides information from the bank’s web services to the Kofax Validation screen.

4. **Data Integration Library:** It is a web service that sends completed batches to the bank’s internal systems.

#### Data Extraction

Data extraction is a process that involves retrieval of data from various sources. In this project, we retrieve some strings and numbers from a "scanned" document. The process involves:

**OCR (Optical Character Recognition):** Required to convert the printed or handwritten text from a scanned document into the electronic environment,
**Regular expressions:** To search a sequence of characters (e.g. National Identity Number),
**String Locaters:** To narrow down the results of the regular expressions
**and custom scripting** (to format or convert the string.)

![diagram](../projectsContent/Customer%20Payment%20Orders%20Automation/images/ValidationDetails.png)

Left: Original Document. Right: Extracted Data

0. Document is automatically classified as "EFT" (Electronic Funds Transfer). The other document type is "Remittance". This is done by scripting, checking if the recipient's is a customer of the bank or not.
1. The "Amount" of the transaction (found and formatted).
2. "Bank Code" and "Branch" (Bank Code is found from the text, "YAPI KREDI BANKASI")
3. Turkish National Identity Number (TCKN). An algorithm checks if the TCKN is valid. EFT type is automatically set to "to name".
4. "Recipient Name" is retrieved from the bank's web services.

**Kofax Validation Screen**

![ValidationScreen](../projectsContent/Customer%20Payment%20Orders%20Automation/images/ValidationScreen.png)
