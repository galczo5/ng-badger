import {HostClassesInitExampleComponent} from "./host-classes-init-example.component";
import type {Meta} from "@storybook/angular";
import type {StoryObj} from "@storybook/angular";

const meta: Meta<HostClassesInitExampleComponent> = {
  title: 'Styles/Examples/hostClasses',
  component: HostClassesInitExampleComponent
};

export default meta;

type Story = StoryObj<HostClassesInitExampleComponent>;

export const Example: Story = {
  args: {}
};
