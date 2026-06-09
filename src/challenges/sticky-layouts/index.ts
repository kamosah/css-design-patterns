import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as basicStickyHeader } from './basic-sticky-header/meta'
import { challenge as stickySidebarNavigation } from './sticky-sidebar-navigation/meta'
import { challenge as persistentStickyFooter } from './persistent-sticky-footer/meta'
import { challenge as stickyElementWithOffset } from './sticky-element-with-offset/meta'
import { challenge as stickyTableHeader } from './sticky-table-header/meta'
import { challenge as scrollableContainerSectionStickiness } from './scrollable-container-section-stickiness/meta'
import { challenge as overlappingStickyBanner } from './overlapping-sticky-banner/meta'
import { challenge as nestedStickyElements } from './nested-sticky-elements/meta'
import { challenge as responsiveStickySidebar } from './responsive-sticky-sidebar/meta'
import { challenge as freezeTableHeaderAndColumn } from './freeze-table-header-and-column/meta'
import { challenge as stickyTimelineYearLabels } from './sticky-timeline-year-labels/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Sticky Layout pattern and understand why it's important.",

  overview: `<p>The <strong>Sticky Layouts</strong> pattern keeps key UI elements—such as headers, footers, sidebars, or call-outs—visible as users scroll. This improves navigation, maintains context, and makes frequent actions easily accessible. It's especially helpful in long or dynamic pages where consistent access to controls or labels enhances usability.</p>`,

  howItWorks: `<p>This pattern uses the CSS <code>position: sticky</code> property, which allows elements to toggle between relative and fixed positioning based on the user's scroll position. The element behaves like a relatively positioned element until a defined scroll threshold is reached, at which point it becomes fixed in place relative to its parent container.</p>`,

  previewHtml: `<div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Name</th><th>Age</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>Alice Johnson</td><td>29</td><td>Frontend Developer</td></tr>
      <tr><td>Bob Smith</td><td>35</td><td>Backend Engineer</td></tr>
      <tr><td>Carol Davis</td><td>42</td><td>Project Manager</td></tr>
      <tr><td>David Kim</td><td>31</td><td>UI/UX Designer</td></tr>
      <tr><td>Eva Lin</td><td>27</td><td>QA Analyst</td></tr>
      <tr><td>Frank Moore</td><td>38</td><td>DevOps Engineer</td></tr>
      <tr><td>Grace Lee</td><td>26</td><td>Product Owner</td></tr>
      <tr><td>Henry Clark</td><td>45</td><td>CTO</td></tr>
      <tr><td>Irene Watts</td><td>33</td><td>Data Scientist</td></tr>
      <tr><td>Jack Thompson</td><td>30</td><td>Mobile Developer</td></tr>
      <tr><td>Kelly Nguyen</td><td>28</td><td>Software Engineer</td></tr>
      <tr><td>Liam Patel</td><td>36</td><td>Security Analyst</td></tr>
      <tr><td>Mia Robinson</td><td>23</td><td>Technical Writer</td></tr>
      <tr><td>Noah Chen</td><td>40</td><td>Cloud Architect</td></tr>
      <tr><td>Olivia Park</td><td>32</td><td>Scrum Master</td></tr>
    </tbody>
  </table>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #ffffff; }
.table-wrapper {
  height: 100vh;
  overflow-y: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #334155;
}
thead tr {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0 1px 0 #e2e8f0;
}
th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #0f172a;
  border-bottom: 2px solid #e2e8f0;
}
td {
  padding: 10px 16px;
  border-bottom: 1px solid #f1f5f9;
}
tbody tr:hover { background: #f8fafc; }`,

  previewCaption: 'A header that sticks at the top of the table as we scroll through it',

  anatomyBlocks: [
    {
      label: 'A common implementation for a sticky header is given below:',
      css: `.sticky-header {
  position: sticky;
  top: 0;              /* Sticks to the top of the viewport */
  background-color: white;
  z-index: 1000;       /* Ensures it stays above other content */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`,
      caption: 'Example CSS for the Sticky Layout pattern',
    },
  ],

  anatomyExplanation: `<p>This ensures the header scrolls with the page until it reaches the top, then stays visible as the user continues to scroll.</p>`,
}

export const topic: Topic = {
  id: 'sticky-layouts',
  title: 'Sticky Layouts',
  patternIntro,
  challenges: [basicStickyHeader, stickySidebarNavigation, persistentStickyFooter, stickyElementWithOffset, stickyTableHeader, scrollableContainerSectionStickiness, overlappingStickyBanner, nestedStickyElements, responsiveStickySidebar, freezeTableHeaderAndColumn, stickyTimelineYearLabels],
}
