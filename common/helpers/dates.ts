import { format, parseISO } from 'date-fns'

export const formatDate = (ISODateString: string, type: 'long' | 'short' = 'long'): string => {
  const parsed = parseISO(ISODateString);

  if (type === 'long') return format(parsed, 'dd-MMMM-yyyy');
  return format(parsed, 'dd-MM-yyyy');
}