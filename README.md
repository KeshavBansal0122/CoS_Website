# IITD Course Browser

## About
IIT course browser is a website to make planning your courses much more accessible and easier. One can easily search for any course via its title or number. For most courses a prerequisite tree is also generated, to allow easy planning. Based on CoS 23-24

All the data used to generate the webpages is available freely at https://github.com/KeshavBansal0122/CoS-data

## Process
This website is made using [Quartz](https://github.com/jackyzha0/quartz), a static site translator which can convert markdown files to web pages. I chose this because it produced a well functioning website with minimal configuration needed and, more importantly, had a search feature which works completely client side, allowing it to be hosted on github pages. It is really similar to Obsidian publish; It had backlink generation and a graph view (which I had to disable because it was found to be confusing).

After the pdf was parsed, the individual prereqs of each course were also parsed for the tree generation. All the pure 'and' and 'or' prereqs were parsed manually, rest were parsed using Claude Opus, with specific instructions to fail in case of confusion instead of producing possible wrong output. The unparsed courses currently are
1. Which contain different prereq for different branches, like [MCL331](https://keshavbansal0122.github.io/CoS_Website/Mechanical-Engineering/MCL331)
2. Contain text like any 3xx HUL course
3. Missing in CoS description even though they appear in prereqs

The tree is generated for all the courses whose all the prereqs in all the possible paths have been parsed. Even if a single unparsed/missing prereq is encountered; the tree generation is aborted. This is to ensure the reliability of the website: incomplete information is permissible, incorrect info is not.

## Contributing
- A feature, that needs some refinement, are the backlinks. It shows all the other pages that link to this page. In the context of this website it shows all the other course which mention the current opened course in their prereqs. Note that this feature has 2 main limitations
  1. Consider the course [COL775](https://keshavbansal0122.github.io/CoS_Website/Computer-Science-and-Engineering/COL775), This course does not show up in COL100's backlinks because COL100 is not _directly_ mentioned in its prereqs
  2. Also for COL775, notice that it has multiple 'pathways' for its prereqs, which makes ELL409 and others a _non-mandatory_ prereq because one can opt for ELL774 directly. The backlinks list does not make any distinction between mandatory and non-mandatory prereqs.

- The search is still slightly unreliable, does not always show even if course number is searched directly
- Not all prereqs have been parsed, although I feel the rest are much more difficult to parse reliably and may need human effort
- Bugs in the CoS itself also plagues the website. Such as many courses being mentioned in the prereqs of other courses but not existing themselves. Advice is needed how to handle these

Open a pull request if you have fixed any of these (or any new bugs/contributions)!
