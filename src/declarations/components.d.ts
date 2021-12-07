// eslint-disable-next-line
import * as React from 'react';

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface IntrinsicElements {
      'shore-error': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { title?: string },
        HTMLElement
      >;
      'shore-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { name?: string },
        HTMLElement
      >;
      'shore-duration': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { value: string; unit: string },
        HTMLElement
      >;
      'shore-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          size?: string;
          selected?: boolean;
          disabled?: boolean;
          pending?: boolean;
        },
        HTMLElement
      >;
      'shore-switch': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          label: string;
          hint?: string;
          checked: boolean | null | undefined;
          disabled?: boolean | null | undefined;
        },
        HTMLElement
      >;
      'shore-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          onClose?: () => void;
        },
        HTMLElement
      >;
      'shore-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-table-head': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-table-body': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-table-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-table-cell': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-spinner': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'shore-super-select': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          label: string;
          searchable?: boolean;
          value?: string;
          options: string;
          multi?: boolean;
          disabled?: boolean;
          noFilterOnInputChange?: boolean;
          onInputChange?: (value: string) => void;
          onChange?: (value: string) => void;
          onFocus?: () => void;
          onBlur?: () => void;
        },
        HTMLElement
      >;
      'shore-input-wrapper': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {},
        HTMLElement
      >;
      'shore-select-wrapper': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          error?: string;
        },
        HTMLElement
      >;
      'shore-date-picker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          shadow?: boolean;
          month?: string;
          fixedWeeks?: boolean;
          fromMonth?: Date;
          toMonth?: Date;
          initialMonth?: Date;
          canChangeMonth?: boolean;
          enableOutsideDays?: boolean;
          showWeekNumbers?: boolean;
          selectedDay?: string;
          todayButton?: string;
          selectedRangeStart?: string;
          selectedRangeEnd?: string;
          hoverRangeStart?: string;
          hoverRangeEnd?: string;
          disabledDays?: string;
          onDayClick?(
            day: Date,
            modifiers: Record<string, unknown>,
            e: React.SyntheticEvent
          ): void;
        },
        HTMLElement
      >;
      'shore-alert-wrapper': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
