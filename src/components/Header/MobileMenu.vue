<script setup>
	const props = defineProps({ modelValue: { type: Boolean, required: true } });
	const emit = defineEmits(["update:modelValue"]);
	function toggle() {
		emit("update:modelValue", !props.modelValue);
	}
	function close() {
		emit("update:modelValue", false);
	}
</script>

<template>
  <div class="block lg:hidden relative">
    <button
      class="p-2 text-white hover:text-red-500 transition-colors"
      aria-label="Меню"
      :aria-expanded="modelValue"
      @click="toggle()"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path
          d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
        />
      </svg>
    </button>

    <nav
      class="absolute right-0 lg:hidden"
      :class="{ hidden: !modelValue }"
    >
      <div class="py-4 bg-gray-800 rounded-lg mt-2 flex flex-col gap-1 whitespace-nowrap">
        <a
          href="#product"
          class="block text-white hover:text-red-500 transition-colors px-4 py-2 rounded hover:bg-gray-700"
          @click="close()"
        >Продукция</a>
        <a
          href="#pechat"
          class="block text-white hover:text-red-500 transition-colors px-4 py-2 rounded hover:bg-gray-700"
          @click="close()"
        >Печать на одежде</a>
        <a
          href="#raboty"
          class="block text-white hover:text-red-500 transition-colors px-4 py-2 rounded hover:bg-gray-700"
          @click="close()"
        >Наши работы</a>
        <a
          href="#kont"
          class="block text-white hover:text-red-500 transition-colors px-4 py-2 rounded hover:bg-gray-700"
          @click="close()"
        >Контакты</a>

        <div class="pt-4 border-t border-gray-700 flex flex-col gap-1">
          <a
            href="tel:+79962812888"
            class="flex items-center space-x-2 px-4 py-2 text-white hover:text-red-500 transition-colors rounded hover:bg-gray-700"
            @click="close()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              />
            </svg>
            <span>+7(996) 281-28-88</span>
          </a>
          <a
            href="#svyaz"
            class="flex items-center space-x-2 px-4 py-2 text-white hover:text-red-500 transition-colors rounded hover:bg-gray-700"
            @click="close()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112х416зM48 400В214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653В400Н48з"
              />
            </svg>
            <span>redpoplar@yandex.ru</span>
          </a>
          <a
            href="#звонок"
            class="text-gray-400 px-4 py-2 pl-11 hover:text-red-500 transition-colors rounded hover:bg-gray-700 group"
            @click="close()"
          >
            заказать обратный звонок
            <hr
              class="border-0 border-t-1 border-dashed border-gray-400 group-hover:border-red-500"
            >
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
