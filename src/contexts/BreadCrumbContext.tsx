import { createContext, useState, useContext, ReactNode } from 'react';

interface BreadcrumbContextProps {
  breadcrumb: string[];
  updateBreadcrumb: (newBreadcrumb: string[]) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps | undefined>(undefined);

const BreadcrumbProvider = ({ children }: {children: ReactNode}) => {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const updateBreadcrumb = (newBreadcrumb: string[]) => {
    setBreadcrumb(newBreadcrumb);
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, updateBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

const useBreadcrumbContext = (): BreadcrumbContextProps => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumbContext debe ser utilizado dentro de un proveedor BreadcrumbProvider');
  }
  return context;
};

export { BreadcrumbProvider, useBreadcrumbContext };
