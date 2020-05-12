import { onGenerateComponent } from '../services/templateService';
import componentClassTemplate from '../templates/componentClassTemplate';
import componentFunctionalTemplate from '../templates/componentFunctionalTemplate';
import componentLogicTemplate from '../templates/componentLogicTemplate';
import componentStyleTemplate from '../templates/componentStyleTemplate';

export function generateComponent(cmd, componentConfig) {
  const { path, subfolder, name } = componentConfig;

  const folderName = name.charAt(0).toLowerCase() + name.slice(1);
  const suffix = path.charAt(0).toUpperCase() + path.slice(1, -1);
  const componentSuffix = path === 'core-components' ? 'Core' : suffix;
  const componentSubfolder = subfolder.trim() !== '' ? `${subfolder.trim().toLowerCase()}/` : '';
  const componentPath = `src/${path}/${componentSubfolder}${folderName}`;
  const componentTemplates = [];

  if (componentConfig.type.toString() === 'class') {
    componentTemplates.push({
      template: componentClassTemplate,
      templateType: `Class:"${name}${componentSuffix}.js"`,
      componentPath: `${componentPath}/${name}${componentSuffix}.js`,
      componentName: name,
    });
  }

  if (componentConfig.type.toString() === 'function') {
    componentTemplates.push({
      template: componentFunctionalTemplate,
      templateType: `Fn:"${name}${componentSuffix}.js"`,
      componentPath: `${componentPath}/${name}${componentSuffix}.js`,
      componentName: name,
    });
  }

  if (componentConfig.hasStyle.toString() === 'true') {
    componentTemplates.push({
      template: componentStyleTemplate,
      templateType: `Style:"${name}Style.js"`,
      componentPath: `${componentPath}/${name}Style.js`,
      componentName: name,
    });
  }

  if (cmd.hasLogic.toString() === 'true') {
    componentTemplates.push({
      template: componentLogicTemplate,
      templateType: `Logic:"${name}Logic.js"`,
      componentPath: `${componentPath}/${name}Logic.js`,
      componentName: name,
    });
  }

  onGenerateComponent(componentTemplates);
}
