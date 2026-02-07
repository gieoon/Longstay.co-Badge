class LongStayBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const propertyId = this.getAttribute('property-id') || '';
    const link = `https://longstay.co/properties/${propertyId}`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .badge-container {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          color: #1a202c;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .badge-container:hover {
          border-color: #3182ce;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .icon {
          width: 20px;
          height: 20px;
          background: #3182ce;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }
        .text-main {
          font-weight: 600;
          font-size: 14px;
        }
        .text-sub {
          font-size: 12px;
          color: #718096;
          display: block;
        }
      </style>
      
      <a href="${link}" class="badge-container" target="_blank" rel="noopener">
        <div class="icon">L</div>
        <div>
          <span class="text-main">Best Rates Guaranteed</span>
          <span class="text-sub">Book via longstay.co</span>
        </div>
      </a>
    `;
  }
}

customElements.define('longstay-badge', LongStayBadge);
