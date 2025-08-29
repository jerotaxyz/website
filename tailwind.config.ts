import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                'border-light': 'hsl(var(--border-light))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                surface: 'hsl(var(--surface))',
                'surface-variant': 'hsl(var(--surface-variant))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    dark: 'hsl(var(--primary-dark))',
                    light: 'hsl(var(--primary-light))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                    hover: 'hsl(var(--secondary-hover))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                    hover: 'hsl(var(--muted-hover))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                    muted: 'hsl(var(--accent-muted))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                    hover: 'hsl(var(--card-hover))',
                },
                text: {
                    primary: 'hsl(var(--text-primary))',
                    secondary: 'hsl(var(--text-secondary))',
                    muted: 'hsl(var(--text-muted))',
                    disabled: 'hsl(var(--text-disabled))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-secondary': 'var(--gradient-secondary)',
                'gradient-accent': 'var(--gradient-accent)',
                'gradient-glow': 'var(--gradient-glow)',
                'gradient-surface': 'var(--gradient-surface)',
            },
            boxShadow: {
                neon: 'var(--shadow-neon)',
                soft: 'var(--shadow-soft)',
                card: 'var(--shadow-card)',
                elevated: 'var(--shadow-elevated)',
            },
            spacing: {
                xs: 'var(--spacing-xs)',
                sm: 'var(--spacing-sm)',
                md: 'var(--spacing-md)',
                lg: 'var(--spacing-lg)',
                xl: 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                'radius-sm': 'var(--radius-sm)',
                'radius-lg': 'var(--radius-lg)',
            },
            fontSize: {
                display: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                headline: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                title: ['2rem', { lineHeight: '1.3' }],
                subtitle: ['1.5rem', { lineHeight: '1.4' }],
                body: ['1rem', { lineHeight: '1.6' }],
                caption: ['0.875rem', { lineHeight: '1.5' }],
                micro: ['0.75rem', { lineHeight: '1.4' }],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            letterSpacing: {
                tighter: '-0.02em',
                tight: '-0.01em',
                normal: '0',
                wide: '0.01em',
                wider: '0.02em',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config
