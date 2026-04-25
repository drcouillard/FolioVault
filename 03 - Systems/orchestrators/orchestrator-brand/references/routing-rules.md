# Routing Rules

Use this file during Step 1 to match the user's request to the correct skill.

## Keyword Decision Tree

### → brand-identity-strategy
Trigger when the user mentions:
- mission, vision, values
- positioning, differentiation
- target audience, customer profile
- tagline, one-liner, elevator pitch
- brand name, brand personality
- what the brand stands for
- who the brand is for
- what makes it different

### → visual-identity-system
Trigger when the user mentions:
- colors, hex codes, palette
- fonts, typography, typeface
- logo, logo rules, logo usage
- spacing, layout, grid
- iconography, illustration style
- visual guidelines, design system

### → brand-voice-system
Trigger when the user mentions:
- tone, voice, personality in writing
- messaging pillars, brand messaging
- copy standards, writing rules
- phrases to use or avoid
- how the brand sounds
- product descriptions, taglines (copy angle)
- do's and don'ts for language

### → brand-style-guide
Trigger when the user mentions:
- build the brand guide
- export the PDF
- create the style guide document
- brand documentation
- compile everything
- finalize the brand
- update the guide

## Multi-Category Routing

If the request spans more than one category, sequence upstream skills first. The guide generator always runs last.

Example: "I want to define my brand and get a PDF"
→ identity → visual → voice → guide

Example: "My colors are done, now I need fonts and a voice guide"
→ visual (fonts only) → voice → guide (if ready)