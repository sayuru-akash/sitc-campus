import { describe, expect, test } from 'bun:test';
import { buildWhatsAppEnquiryUrl } from '../src/lib/enquiry.ts';

describe('WhatsApp enquiry handoff', () => {
  test('preserves Unicode and special characters in the encoded enquiry', () => {
    const url = new URL(
      buildWhatsAppEnquiryUrl({
        name: '  Test & student  ',
        interest: 'Psychology & Counselling - Diploma',
        qualification: 'G.C.E. A/L',
        message: '  Fees + schedule? සිංහල  ',
      }),
    );
    expect(url.origin).toBe('https://wa.me');
    expect(url.pathname).toBe('/94715258653');
    expect(url.searchParams.size).toBe(1);
    expect(url.searchParams.get('text')).toContain('Name: Test & student\n');
    expect(url.searchParams.get('text')).toContain(
      'Programme: Psychology & Counselling - Diploma',
    );
    expect(url.searchParams.get('text')).toContain(
      'My question: Fees + schedule? සිංහල',
    );
  });
  test('offers programme advice and omits an empty optional question', () => {
    const url = new URL(
      buildWhatsAppEnquiryUrl({
        name: 'Test student',
        interest: '',
        qualification: 'G.C.E. O/L',
        message: '  ',
      }),
    );
    expect(url.searchParams.get('text')).toContain(
      'Programme: Help me choose a programme',
    );
    expect(url.searchParams.get('text')).not.toContain('My question:');
  });
});
