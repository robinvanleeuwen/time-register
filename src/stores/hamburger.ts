import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const menuOpen: Writable<boolean> = writable(false);