export class ProfileData {
    static readonly SUB_HEADING: string = 'Please enter details of the person will be the Admin for this account. If you are the Admin, please enter your details.';
    static readonly SUB_HEADING2: string = 'Please provide information as per your registration business details, This will be used for communication and billing purpose.';
    static readonly SUB_HEADING3: string = 'Kindly thoroughly review and submit the details We only save the details submitted by you. The pending details can be completed lated as well, using the edit button.';
    static readonly ACCOUNT_TYPE: Array<any> = [
        { key: 'erp', value: 'ERP' },
        { key: 'ePharmacy', value: 'e-pharmacy' },
        { key: 'individualPharmacy', value: 'Individual pharmacy' },
        { key: 'teleHealth', value: 'Tele health' },
        { key: 'ehr', value: 'EHR' }
    ];
    static readonly PROFILE_PERSONAL_DETAIL: Array<any> = [
        { id: 'name', label: 'Name', class: 'col-md-4' },
        { id: 'designation', label: 'Designation', class: 'col-md-4' },
        { id: 'contactNo', label: 'Phone Number', class: 'col-md-4' },
        { id: 'email', label: 'Email Id', class: 'col-md-4' },
        { id: 'typeOfAccount', label: 'Account type', class: 'col-md-4' }
    ];
    static readonly PROFILE_BUSINESS_DETAIL: Array<any> = [
        { id: 'organization', label: 'Organization Name', class: 'col-md-12' },
        { id: 'address', label: 'Address', class: 'col-md-4' },
        { id: 'country', label: 'Country', class: 'col-md-4' },
        { id: 'pin', label: 'Pin', class: 'col-md-4' },
        { id: 'panNo', label: 'PAN No.', class: 'col-md-4' },
        { id: 'gst', label: 'GST', class: 'col-md-4' },
    ];
}