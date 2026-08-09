import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import type { ButtonTone, ButtonVariant } from "./Button";

/** Stand-in for a consumer-supplied icon — mirrors Figma's `Placeholder/Standard`. */
function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="100%" height="100%">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "text"],
      description: "Figma `Style`",
    },
    tone: {
      control: "select",
      options: ["default", "danger", "onColor"],
      description: "Figma `Type`",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Figma `Size`",
    },
    loading: {
      control: "boolean",
      description: "Figma `State=Loading`",
    },
    disabled: {
      control: "boolean",
      description: "Figma `State=Disabled`",
    },
    children: {
      control: "text",
      description: "Figma `label`",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    tone: "default",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    tone: "default",
    size: "medium",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    tone: "default",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    variant: "primary",
    tone: "danger",
    size: "medium",
    children: "Delete",
  },
};

export const OnColor: Story = {
  args: {
    variant: "primary",
    tone: "onColor",
    size: "medium",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#1a1a1a", padding: 32, borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: { size: "small" },
};

export const Large: Story = {
  args: { size: "large" },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <PlaceholderIcon />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <PlaceholderIcon />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/** Every `variant` x `tone` combination at Medium, Default state. */
export const AllVariants: Story = {
  render: (args) => {
    const variants: ButtonVariant[] = ["primary", "secondary", "text"];
    const tones: ButtonTone[] = ["default", "danger", "onColor"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {tones.map((tone) => (
          <div
            key={tone}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              padding: tone === "onColor" ? 24 : 0,
              background: tone === "onColor" ? "#1a1a1a" : "transparent",
              borderRadius: 8,
            }}
          >
            {variants.map((variant) => (
              <Button key={variant} {...args} variant={variant} tone={tone}>
                {variant}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
