import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    version: null,
    downloadName: ".exe",
    downloadUrl: "https://github.com/jecsham/msi/releases", //fallback url
    downloadSourceUrl: "https://github.com/jecsham/msi/releases", //fallback url
    fetching: false,
  });

  const getProductInfo = async () => {
    setState({ ...state, fetching: true });
    let resp = await fetch("https://api.github.com/repos/jecsham/msi/releases");
    if (resp.status !== 200) {
      // use fallback
      setState({ ...state, fetching: false });
      return;
    }
    let data = await resp.json();
    if (data?.length == 0) {
      // use fallback
      setState({ ...state, fetching: false });
      return;
    }
    setState({
      ...state,
      fetching: false,
      downloadUrl: data[0].assets[0].browser_download_url,
      downloadName: data[0].assets[0].name,
      downloadSourceUrl: data[0].zipball_url,
      version: data[0].tag_name,
    });
    console.log(data);
    return true;
  };

  const fetchingInfo = () => {
    if (!state.fetching) return;
    return (
      <div className="text-muted">
        <div
          className="spinner-border spinner-border-sm text-muted me-1"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        Fetching information from Github...
      </div>
    );
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>My System Information | Jecsham Castillo</title>
      </Head>
      <div className="row">
        <div className="col">
          <div className="text-center mt-4">
            <img className="hero-logo" draggable="false" src="/images/512x512.png" />
            <p className="display-5 fw-bold">My System Information</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="row align-items-center py-4">
            <div className="col-12">
              <h5>What is My System Information?</h5>
              <p>
                My System Information (msi) allows you to visualize the main
                components of your Windows computer.
              </p>

              <h5>Download last version for Windows 10 and later</h5>
              <p>Last version is available for Windows 10 from GitHub.</p>
              {fetchingInfo()}
              <div data-bs-toggle="modal" data-bs-target="#protectModal">
                <a
                  href={state.downloadUrl}
                  className={`btn btn-success ${
                    state.fetching ? "disabled" : ""
                  }`}
                >
                  Download {state.version} - {state.downloadName}
                </a>
              </div>
              <div className="mt-1">
                <a
                  href={state.downloadSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2 small"
                >
                  Download source code
                </a>
                <a
                  href="https://github.com/jecsham/msi/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small"
                >
                  Go to releases page
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <Image
                  draggable={false}
                  src="/images/s1.png"
                  width={831}
                  height={582}
                  quality={100}
                  alt="My System Information Screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="d-flex justify-content-center my-4 ">
            <a
              href="https://github.com/jecsham/msi"
              className="small me-4 text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://jecsham.com/donate"
              className="small me-4 text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
            <span className="small text-muted">
              Copyright © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="protectModal"
        tabIndex={-1}
        aria-labelledby="protectModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="protectModalLabel">
                Important Notice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                You may receive a warning from{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/what-is-smartscreen-and-how-can-it-help-protect-me-1c9a874a-6826-be5e-45b1-67fa445a74c8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SmartScreen
                </a>
                . This is because this program is relatively new, so it has no
                reputation.{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/what-is-smartscreen-and-how-can-it-help-protect-me-1c9a874a-6826-be5e-45b1-67fa445a74c8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
                .
              </p>
              <p>
                To continue with the installation, you can click in{" "}
                <strong>More info</strong> &gt; <strong>Run anyway</strong>
              </p>
              <Image
                draggable={false}
                src="/images/protected.jpg"
                width={1085}
                height={500}
                quality={100}
                alt="Protected screenshot"
              />
              <p>
                This program is <strong>Open Source</strong>, so you can also
                compile your own version by downloading the{" "}
                <a
                  href="https://github.com/jecsham/msi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  source code
                </a>
                .
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
