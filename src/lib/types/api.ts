// https://github.com/simonyiszk/konf-web-2024/blob/main/src/models/models.ts

export enum SponsorCategory {
	MAIN_SPONSOR = 'MAIN_SPONSOR',
	FEATURED_SPONSOR = 'FEATURED_SPONSOR',
	SPONSOR = 'SPONSOR'
}

export interface Company {
	logoUrl: string;
	name: string;
	url: string;
	category: SponsorCategory;
}

export interface Presenter {
	name: string;
	rank: string;
	pictureUrl: string;
	company?: Company;
}

export interface Presentation {
	slug: string;
	title: string;
	presenter: Presenter;
	room: 'IB028' | 'IB025';
	language: 'en' | 'hu';
	startTime: string;
	endTime: string;
	description: string;
	questionsUrl: string; // még kérdéses, hogy így lesz-e
	imageUrls?: string[];
}

export interface IndexPageData {
	featuredPresentation: {
		sectionTitle: string;
		description: string;
		presentation: Presentation;
	};
	presentations: Presentation[];
	[key: string]: unknown;
}
