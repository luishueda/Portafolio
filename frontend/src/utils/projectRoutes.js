const slugify = (value = '') => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getProjectPath = (project) => {
    const id = String(project.id);
    return /^\d+$/.test(id) ? `/proyectos/${id}-${slugify(project.title) || 'proyecto'}` : `/proyectos/${id}`;
};

export const getSolutionPath = (project) => getProjectPath(project).replace('/proyectos/', '/soluciones/');

const getServiceForProject = (title = '') => {
    const normalizedTitle = title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    if (/(inventario|mercaderia|ropa|botica)/.test(normalizedTitle)) return 'Sistema de ventas e inventario';
    if (/(veterinaria|salon)/.test(normalizedTitle)) return 'Sistema de citas y reservas';
    return 'Sistema web personalizado';
};

export const getContactPath = (project) => {
    const params = new URLSearchParams({ proyecto: project.title, servicio: getServiceForProject(project.title) });
    return `/?${params.toString()}#contacto`;
};

export const getProjectIdentifierFromSlug = (slug = '') => {
    const match = slug.match(/^(\d+)(?:-|$)/);
    return match ? Number(match[1]) : slug || null;
};
