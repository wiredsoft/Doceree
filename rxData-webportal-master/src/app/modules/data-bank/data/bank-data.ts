export class BankData {
    static readonly BANK_TABLE_COLUMN: Array<any> = [
        {
            name: 'File header',
            key: 'fileHeader',
            type: 'checkbox',
            check: 'isSelected'
        },
        {
            name: 'Mapped to desire field',
            key: 'mappedToDesiredField',
            type: 'select',
            options: [{ value: 'Field mapped to' }, { value: 'Processed' }, { value: 'Raise invoice' }]
        },
        {
            name: 'Data',
            key: 'data',
            type: 'tooltip'
        },
        {
            name: '',
            key: 'skip',
            type: 'checkbox',
            check: 'isChecked'
        }
    ];

    static readonly BANK_TABLE_DATA: Array<any> = [
        {
            fileHeader: 'Doctor number',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Patient number',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Doctor name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Patient name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataCount: 10
        },
        {
            fileHeader: 'Patient number',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Date',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Bill number',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Pharmacy address',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Product name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Product price',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Product quantity',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Tax amount',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Exp date',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Batch number',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        }
    ];

    static readonly BANK_TABLE_DATA_FOR_EHR: Array<any> = [
        {
            fileHeader: 'Visit ID',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Patient Age',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Patient Gender',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Temperature',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataCount: 10
        },
        {
            fileHeader: 'BP Diastolic',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'BP Systolic',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Pulse',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Diagnosis',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Prescription',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Lab tests',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        }
    ];

    static readonly BANK_MAPPED_FILED: Array<any> = [
        { id: 'doctorNumber', label: 'Doctor number', class: 'col-md-4' },
        { id: 'patientNumber', label: 'Patient number', class: 'col-md-4' },
        { id: 'doctorName', label: 'Doctor name', class: 'col-md-4' },
        { id: 'patientName', label: 'Patient name', class: 'col-md-4' },
        { id: 'patientNumber', label: 'Patient number', class: 'col-md-4' },
        { id: 'date', label: 'Date', class: 'col-md-4' },
        { id: 'billNumber', label: 'Bill number', class: 'col-md-4' },
        { id: 'pharmacyAddress', label: 'Pharmacy address', class: 'col-md-4' },
        { id: 'productName', label: 'Product name', class: 'col-md-4' },
        { id: 'productPrice', label: 'Product price', class: 'col-md-4' },
        { id: 'productQuantity', label: 'Product quantity', class: 'col-md-4' },
        { id: 'taxAmount', label: 'Tax amount', class: 'col-md-4' },
        { id: 'expDate', label: 'Exp date', class: 'col-md-4' },
        { id: 'batchNumber', label: 'Batch number', class: 'col-md-4' }
    ];

    static readonly BANK_MAPPED_FILED_FOR_EHR: Array<any> = [
        { id: 'visitId', label: 'Visit ID', class: 'col-md-4' },
        { id: 'patientAge', label: 'Patient Age', class: 'col-md-4' },
        { id: 'patientGender', label: 'Patient Gender', class: 'col-md-4' },
        { id: 'temperature', label: 'Temperature', class: 'col-md-4' },
        { id: 'bpDiastolic', label: 'BP Diastolic', class: 'col-md-4' },
        { id: 'bpSystolic', label: 'BP Systolic', class: 'col-md-4' },
        { id: 'pulse', label: 'Pulse', class: 'col-md-4' },
        { id: 'diagnosis', label: 'Diagnosis', class: 'col-md-4' },
        { id: 'prescription', label: 'Prescription', class: 'col-md-4' },
        { id: 'labTests', label: 'Lab Tests', class: 'col-md-4' },
    ]

    static readonly BANK_MAPPED_OBJECT: any = {
        doctorNumber: '1293748936485',
        doctorName: 'Pharmacy 01',
        patientNumber: '9897454',
        patientName: 'Test',
        date: '25 Dec 2021',
        billNumber: 'AQ2342',
        pharmacyAddress: '1 Pharmacy Address India ',
        productName: 'Contact Details',
        productPrice: '54555'
        , productQuantity: '23123123',
        taxAmount: '6548',
        expDate: '25 Dec 2021',
        batchNumber: '398479853'
    };

    static readonly BANK_MAPPED_OBJECT_FOR_EHR: any = {
        visitId: 'John Deo',
        patientAge: '23',
        patientGender: 'M',
        temperature: '23',
        bpDiastolic: '39393',
        bpSystolic: 'AQ2342',
        pulse: '3',
        diagnosis: 'Test',
        prescription: 'A5S4555',
        labTests: 'LabTests',
    };

    static readonly BASIC_SELECT = {
        placeHolder: 'Upload Data',
        backgroundColor: '#05d672',
        pHColor: '#ffffff',
        list: [{ title: 'Upload CSV', icon: 'fa fa-files-o' }, { title: 'API Integration', icon: 'fa fa-plus-circle' }]
      };

    static readonly UPLOAD_CSV_SUB_HEADING:string = 'Please upload raw data shared by your pharmacy partner. You may opt for a bulk upload using a .csv file or add each entity manually.';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR:string = 'Please upload raw data shared by your EHRs. You may opt for a bulk upload using a .csv file or add each entity manually.';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR1:string = 'Kindly select the csv file with raw data of your EHR, or you man download a standard csv template for easy data upload.';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR2:string = 'Kindly ensure that the file headers in your csv file are mapped to the desired fields. Once done, please upload the csv file.';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR3:string = 'Please set the price for uploaded data set. Our system will suggest the optimum price point to help you maximize your monetization opportunity';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR4:string = 'Please select the bank account where you want to receive payments for this data set';
    static readonly UPLOAD_CSV_SUB_HEADING_EHR5:string = 'Kindly review and submit the details. Once approved, you will need to raise a request to your admin to change/edit any account details';

    static readonly UPLOAD_API_SUB_HEADING:string = 'For successful API integration, simply follow all the steps. Once that is done, just sit back and relax, we will monetize it for you.';
    static readonly UPLOAD_API_SUB_HEADING_EHR:string = 'For successful API integration, simply follow all the steps. Once that is done, just sit back and relax, we will monetize it for you';
    static readonly UPLOAD_API_SUB_HEADING_EHR1:string = 'Please use the Test API Key and Live API Key for integration';
    static readonly UPLOAD_API_SUB_HEADING_EHR2:string = 'Kindly upload the data set as per the instructions given below';
    static readonly UPLOAD_API_SUB_HEADING_EHR3:string = 'Please set the price for the uploaded data set. Our system will suggest the optimum price point to help you maximize your monetization opportunity';
    static readonly UPLOAD_API_SUB_HEADING_EHR4:string = 'Please upload raw data shared by your EHRs. You may opt for a bulk upload using a .csv fule or add each entity manually';
    static readonly UPLOAD_API_SUB_HEADING_EHR5:string = 'Please upload raw data shared by your EHRs. You may opt for a bulk upload using a .csv fule or add each entity manually';
}