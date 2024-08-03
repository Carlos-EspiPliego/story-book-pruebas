import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
    title: 'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3']
            }
        },
        label: {
            control: {
                type: 'text'
            }
        },
        color: {
            control: {
                type: 'select',
                options: ['text-primary', 'text-secondary', 'text-tertiary']
            }
        },
    }

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello, World!',
        size: 'normal'
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        allCaps: true

    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        fontColor: 'blue'
    }
};