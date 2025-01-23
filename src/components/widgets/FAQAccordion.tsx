import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  return (
    <Accordion.Root class="w-full dark:text-gray-50 pb-4">
      {/* Services Section */}
      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>What types of photography do you offer?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">
              We specialize in portrait, event, commercial, and product photography to meet all your visual needs.
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Do you provide video production services?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">
              Yes, we offer full video production services, including filming, editing, and post-production.
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Can you assist with creative direction?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">
              Absolutely! We collaborate with clients to develop creative concepts and ensure a cohesive visual story.
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>What is your turnaround time for projects?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">
              Our turnaround time typically ranges from 1-3 weeks, depending on the scope and complexity of the project.
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Do you offer custom packages?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">
              Yes, we provide customizable packages to fit your unique photo and video needs.
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
});
