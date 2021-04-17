export class FormModal {
    value: any;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    type?: string;
    class: string;
    color: string;
    options?: any[];

    constructor(options: {
        value?: any;
        key?: string;
        label?: string;
        required?: boolean;
        controlType?: string;
        type?: string;
        class?: string;
        color?: string
        options?: any[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.class = options.class || '';
      this.color = options.color || '';
      this.options = options.options || [];
    }
}
