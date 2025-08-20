import { ref, ComponentPublicInstance } from "vue";

const sectionRefs = ref<Record<string, ComponentPublicInstance | null>>({});

export const useScrollToSection = () => {
	const registerSection = (name: string, element: ComponentPublicInstance | null) => {
		sectionRefs.value[name] = element;
	};

	const scrollToSection = (name: string) => {
		const element = sectionRefs.value[name]?.$el;

		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return {
		scrollToSection,
		registerSection,
	};
};
