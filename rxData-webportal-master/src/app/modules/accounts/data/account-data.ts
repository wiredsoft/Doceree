export class AccountData {
    static readonly ACCOUNT_MAPPED_DATA: Array<any> = [
        { id: 'pharmacyName', label: 'Pharmacy Name', class: 'col-md-4' },
        { id: 'pharmacistName', label: 'Pharmacist name', class: 'col-md-4' },
        { id: 'dlNo', label: 'DL No.', class: 'col-md-4' },
        { id: 'organization', label: 'Organization name', class: 'col-md-4' },
        { id: 'gst', label: 'GST', class: 'col-md-4' },
        { id: 'panNo', label: 'PAN No.', class: 'col-md-4' },
        { id: 'address', label: 'Address', class: 'col-md-4' },
        { id: 'pin', label: 'PIN', class: 'col-md-4' }
    ];

    static readonly ACCOUNT_MAPPED_EHR_DATA: Array<any> = [
        { id: 'ehrName', label: 'EHR Name', class: 'col-md-4' },
        { id: 'domainUrl', label: 'Domain URL', class: 'col-md-4' },
        { id: 'companyAddress', label: 'Company Address', class: 'col-md-4' },
        { id: 'pin', label: 'PIN', class: 'col-md-4' },
        { id: 'gst', label: 'GST', class: 'col-md-4' },
        { id: 'panNo', label: 'PAN No.', class: 'col-md-4' },
        { id: 'address', label: 'Address', class: 'col-md-4' },
    ];

    static readonly ACCOUNT_TABLE_DATA: Array<any> = [
        {
            fileHeader: 'Pharmacy Name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Pharmacist name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'DL No.',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Organization name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: false,
            dataCount: 10
        },
        {
            fileHeader: 'GST',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'PAN No.',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Address',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'PIN',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        }
    ];

    static readonly ACCOUNT_EHR_TABLE_DATA: Array<any> = [
        {
            fileHeader: 'EHR Name',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Domain URL',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: true,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Company address',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: true,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'PIN',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'GST',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'PAN No.',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },
        {
            fileHeader: 'Address',
            mappedToDesiredField: 'Field mapped to',
            data: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            skip: 'Skip',
            isSelected: false,
            isChecked: false,
            dataForCount: ['Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01', 'Lorem ipsum 01'],
            dataCount: 10
        },

    ];

    static readonly ACCOUNT_TABLE_COLUMN: Array<any> = [
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

    static readonly TABLE_COLUMN_DATA: Array<any> = [
        {
            name: 'A/C Id',
            key: 'accountId',
        },
        {
            name: 'Recent uploads',
            key: 'recentUploads',
        },
        {
            name: 'Name',
            key: 'name',
        },
        {
            name: 'Pincode',
            key: 'pinCode',
        },
        {
            name: 'No of rows',
            key: 'noOfRows',
        },
        {
            name: 'Confidence',
            // key: 'confidence',
            key: 'confidenceScore',
            type: 'radialBar',
            textAlign: 'center'
        },
        {
            name: 'Earnings',
            key: 'earnings',
        }

    ];
    static readonly TABLE_DATA: Array<any> = [
        {
            accountId: '123456',
            recentUploads: 63733,
            name: 'Ashvin',
            pinCode: 452010,
            noOfRows: '2',
            confidence: '10',
            confidenceScore: 25,
            series: [25], fill: {
                colors: ['#ec1c24']
            },
            earnings: '1020'
        },
        {
            accountId: '123498',
            recentUploads: 63733,
            name: 'DigVijay',
            pinCode: 452010,
            noOfRows: '2',
            confidence: '10',
            confidenceScore: 50,
            series: [50],
            fill: {
                colors: ['#f8d33e']
            },
            earnings: '10200'
        },
        {
            accountId: '123987',
            recentUploads: 63733,
            name: 'Shen',
            pinCode: 452010,
            noOfRows: '2',
            confidence: '10',
            confidenceScore: 75,
            series: [75],
            fill: {
                colors: ['#05d672']
            },
            earnings: '10020'
        },
    ];

    static readonly BASIC_SELECT = {
        // headerIcon:'fa fa-filter',
        placeHolder: 'Add Accounts',
        backgroundColor: '#05d672',
        pHColor: '#ffffff',
        list: [{ title: 'Upload CSV', icon: 'fa fa-files-o' }, { title: 'Manual Add', icon: 'fa fa-plus-circle' }]
      };
    static readonly SUB_HEADING :string = 'Please add details of your Pharmacy partners. You may opt for a bulk upload using a .csv file or add each entity manually. We support both! ';
    static readonly SUB_HEADING_FOR_EHR :string = 'Please add details of your EHRs. You may opt for a bulk upload using a .csv file or add each entity manually. We support both! ';

    static readonly ACCOUNT_UPLOAD_SUB_HEADING : string = 'Kindly select the file containing details of your pharmacy partners, or you may download a standard csv template for easy upload. The choice is yours.';
    static readonly ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR : string = 'Kindly select the file containing details of your EHRs, or you may download a standard csv template for easy upload. The choice is yours.';
    static readonly ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR1 : string = 'Kindly ensure that the file headers in your csv file are mapped to the desired fields. Once done, please upload the csv file';
    static readonly ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR2 : string = 'Kindly review and submit the details. Once approved, you will need to raise a request to your admin to change/edit any account details.';
}