// import Link from 'next/link'

export default function Home1() {
  return (
    <div className="input-group">
      <i className="input-group-text bi bi-search" id="logoinput"></i>
      <input
        placeholder="Cari resep: oseng, sayur, dll"
        type="search"
        className="form-control"
        id="input"
      />
    </div>
  )
}
