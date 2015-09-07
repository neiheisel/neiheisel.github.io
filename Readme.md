# Home

You may edit the following attributes in `_config.yml`:

* `name`
* `title`

### Profile

You may edit the lines in `_data/bio.yml` to add new paragraphs.

### Teaching

You may edit the syllabi in `_data/syllabi_at_ub.yml` or `_data/syllabi_at_denison.yml`

Each syllabi should have a `name` and `url`

### Education

You may edit the syllabi in `_data/degrees.yml`

Each degree should have a `name`, `institution`, `year`, and `details`

### Experience

You may edit the syllabi in `_data/syllabi_at_ub.yml` or `_data/syllabi_at_denison.yml`

Each experience should have a `name`, `title`, `location`, `time`, and `details`

### Papers and Research

You may add/edit the publications in `_publications/`

Each publication should start with the following:

```
---
unique-id: same-as-file
authors: Neiheisel
categories: religion-and-politics
year: year-of-pub
name: Paper name.
journal: Journal
volume: Volume
issue: Issue
pages: Page-to-Page
additional_materials:
  - name:
    url:
  - name:
    url:
---

This is the start of the abstract.
```

*Notes:*

* These will be rendered in reverse alphabetic order.
* If no journal is specified, the _journal_ will be labeled as "Working Paper"
* Possible categories must match `_data/publication_filters.yml`

### Contact

You may edit the following attributes in `_config.yml`:

* `address`
* `phone`
* `email`


### Quotes

Each section has a subtitle which are either an overview of the section or can be a relevent quote.  To modify these, find the appropriate `quotes` section in `_config.yml` and modify.

### Social Media

Specify `google_scholar_url`, `linkedin_url`, `github_url`, or `cv_url` in `_config.yml`.
