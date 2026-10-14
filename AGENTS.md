<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio as one anchor-navigated page at `/`; all seven sections are part of a single continuous personal story.
- Define visual roles and responsive layout styles in `src/styles.css` and reuse the shared UI controls to keep the design consistent.
- Until the owner supplies verified contact details, keep social controls explicitly unavailable and the contact form draft-only; never invent profile URLs or claim a message was delivered.
