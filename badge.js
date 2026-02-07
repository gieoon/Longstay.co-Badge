class LongStayBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // This allows the component to react if you change the attribute via JS
  static get observedAttributes() {
    return ['property-id'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const propertyId = this.getAttribute('property-id') || '';
    const link = `https://longstay.co/properties/${propertyId}`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          cursor: pointer;
        }
        .badge-container {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          text-decoration: none;
          color: #1a202c;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          user-select: none;
          white-space: nowrap;
        }
        .badge-container:hover {
          border-color: #3182ce;
          background: #f7fafc;
        }
        .icon {
          width: 22px;
          height: 22px;
          background: #3182ce;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 14px;
        }
        .text-main {
          font-weight: 700;
          font-size: 13px;
          line-height: 1.2;
          display: block;
        }
        .text-sub {
          font-size: 11px;
          color: #718096;
          display: block;
        }
      </style>
      
      <a href="${link}" class="badge-container" target="_top">
        <div class="icon">L</div>
        <div>
          <span class="text-main">Best Rates Guaranteed</span>
          <span class="text-sub">Book via longstay.co</span>
        </div>
      </a>
    `;
  }
}

if (!customElements.get('longstay-badge')) {
  customElements.define('longstay-badge', LongStayBadge);
}
