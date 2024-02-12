<script lang="ts">
	import { onMount } from 'svelte';
	import { DateTime, Duration, type DurationObjectUnits } from 'luxon';

	export let from: string;
	export let zone: string;

	let remaining: DurationObjectUnits & { done: boolean } = {
		years: 0,
		months: 0,
		weeks: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		done: true
	};

	let diff = 0;
	let r: Duration | null = null;
	let target: DateTime | null = null;
	let local;
	let timer: number;

	/**
	 * Converts milliseconds into greater time units as possible
	 * @param {int} ms - Amount of time measured in milliseconds
	 * @return {?Object} Reallocated time units. NULL on failure.
	 */
	function timeUnits(ms: number) {
		if (!Number.isInteger(ms)) {
			return null;
		}
		/**
		 * Takes as many whole units from the time pool (ms) as possible
		 * @param {int} msUnit - Size of a single unit in milliseconds
		 * @return {int} Number of units taken from the time pool
		 */
		const allocate = (msUnit: number) => {
			const units = Math.trunc(ms / msUnit);
			ms -= units * msUnit;
			return units;
		};
		// Property order is important here.
		// These arguments are the respective units in ms.
		return {
			// weeks: allocate(604800000), // Uncomment for weeks
			days: allocate(86400000),
			hours: allocate(3600000),
			minutes: allocate(60000),
			seconds: allocate(1000),
			ms: ms // remainder
		};
	}

	onMount(() => {
		try {
			target = DateTime.fromISO(from, { zone: zone });
		} catch (e) {
			if (e.message.indexOf('Invalid time zone') > -1) {
				//target = dayjs(from, dateFormat);
				console.warn(
					'[svelte-countdown] Countdown might not be precice as a proper timezone was not defined.'
				);
			} else {
				console.warn(
					'[svelte-countdown] Could not calculate date, make sure your "from" and "dateFormat" inputs are correct.'
				);
			}
		}

		if (DateTime.isDateTime(target)) {
			local = DateTime.local({
				zone: zone,
				locale: 'hu'
			});
			diff = target.toMillis() - local.toMillis();
		}

		timer = setInterval(function () {
			if (diff > 0) {
				r = Duration.fromMillis(diff);
				remaining = {
					...timeUnits(r.milliseconds),
					done: false
				};
				diff -= 1000;
			} else {
				remaining = {
					years: 0,
					months: 0,
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					done: true
				};
				clearInterval(timer);
			}
		}, 1000);
	});
</script>

<slot {remaining} />
