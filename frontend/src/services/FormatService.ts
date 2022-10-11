export const FormatService = {
    monetaryValue(value: number): string {
        return value.toLocaleString(
            'pt-BR', 
            { 
                minimumFractionDigits: 2, 
                style: 'currency', 
                currency: 'BRL'
            }
        ); 
    },
    textLimit(text: string, max_length: number): string {
        if (text.length < max_length) {
            return text;
        }

        return text.slice(0, 50) + '...';
    }
}